import { multiplication } from "./multiplication";

describe('multiplication unit tests', () => {

    it('should mult 2 * 4 = 8', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0;

        // Act
        result = multiplication(2 , 4);

        // Assert
        expect(result).toBe(8);
    })


    it('should mult 0 * -2 = 0', () => {
        // Arrange
        let result = 0;
        // Act
        result = multiplication(0 , -2);
        // Assert
        expect(result).toBe(0);    
    })

    it('should 3.0 * 0.5 = 1.5', () => {
        // Arrange
        let result = 0;
        // Act
        result = multiplication(3.0 , 0.5);
        // Assert
        expect(result).toBe(1.5);
    })

    it('should mult 2.0 * 1.5 = 3.0', () => {
        // Arrange
        let result = 0;
        // Act
        result = multiplication(2.0 , 1.5);
        // Assert
        expect(result).toBe(3.0);
    })

}) 