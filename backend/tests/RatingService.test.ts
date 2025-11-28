import RatingService, { RatingServiceError } from '../services/RatingService';
import RatingRepository from '../repositories/RatingRepository';
import TeacherRepository from '../repositories/TeacherRepository';
import UserRepository from '../repositories/UserRepository';

// 1. MOCKIMINE: Ütleme Jestile, et ära kasuta päris faile, vaid "tühje kestasid"
jest.mock('../repositories/RatingRepository');
jest.mock('../repositories/TeacherRepository');
jest.mock('../repositories/UserRepository');

describe('RatingService', () => {
    
    // Enne igat testi puhastame ajaloo (et eelmise testi andmed ei segaks)
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('peaks edukalt lisama hinde ja uuendama õpetaja keskmist (HAPPY PATH)', async () => {
        // --- ETTEVALMISTUS (ARRANGE) ---
        
        // 1. Simuleerime, et Õpetaja on olemas
        (TeacherRepository.findById as jest.Mock).mockResolvedValue({ id: 1, name: 'Lauri' });
        
        // 2. Simuleerime, et Kasutaja on olemas
        (UserRepository.findById as jest.Mock).mockResolvedValue({ id: 10, name: 'Robin' });
        
        // 3. Simuleerime, et kasutaja POLE varem hinnanud (return null)
        (RatingRepository.findByTeacherAndUser as jest.Mock).mockResolvedValue(null);
        
        // 4. Simuleerime hinde loomist
        (RatingRepository.create as jest.Mock).mockResolvedValue({ 
            id: 100, rating: 5, description: 'Super', teacherId: 1, userId: 10 
        });

        // 5. Simuleerime uue keskmise arvutamist (nt tagastab 4.5)
        (RatingRepository.getAverageRatingForTeacher as jest.Mock).mockResolvedValue(4.5);

        // --- TEGEVUS (ACT) ---
        const result = await RatingService.createRating({
            teacherId: 1,
            userId: 10,
            rating: 5,
            description: 'Väga hea õpetaja!'
        });

        // --- KONTROLL (ASSERT) ---
        
        // Kontrollime, et hinne loodi
        expect(result).toBeDefined();
        expect(RatingRepository.create).toHaveBeenCalledTimes(1);
        
        // KONTROLLIME ÄRIREEGLIT: Kas TeacherRepository.updateAvgRating kutsuti välja?
        expect(TeacherRepository.updateAvgRating).toHaveBeenCalledWith(1, 4.5);
    });

    it('peaks viskama vea, kui hinne ei ole vahemikus 1-5 (VALIDATION)', async () => {
        // --- TEGEVUS & KONTROLL ---
        
        // Ootame, et see kutse viskaks Errori
        await expect(RatingService.createRating({
            teacherId: 1,
            userId: 10,
            rating: 100, // Vigane hinne
            description: 'Halb'
        })).rejects.toThrow("Hinnang peab olema 1 kuni 5");

        // Kontrollime, et andmebaasi EI kirjutatud midagi
        expect(RatingRepository.create).not.toHaveBeenCalled();
    });

    it('peaks viskama vea, kui õpetajat ei leita (NOT FOUND)', async () => {
        // Simuleerime, et õpetajat pole (return null)
        (TeacherRepository.findById as jest.Mock).mockResolvedValue(null);

        await expect(RatingService.createRating({
            teacherId: 999,
            userId: 10,
            rating: 5,
            description: '...'
        })).rejects.toThrow("Õpetajat ei leitud");
    });
});