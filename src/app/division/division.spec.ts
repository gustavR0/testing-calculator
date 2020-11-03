import { division } from "./division";

describe('division unit tests', () => {

    it('should div 2 / 2 = 1', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0;

        // Act
        result = division(2 , 2);

        // Assert
        expect(result).toBe(1);
    })


    it('should div 9 / 2 = 4.5', () => {
        // Arrange
        let result = 0;
        // Act
        result = division(9 , 2);
        // Assert
        expect(result).toBe(4.5);    
    })

    it('should div 3.0/ 0.5 = 6', () => {
        // Arrange
        let result = 0;
        // Act
        result = division(3.0 , 0.5);
        // Assert
        expect(result).toBe(6);
    })

    it('should div 0 / 1 = 0', () => {
        // Arrange
        let result = 0;
        // Act
        result = division(0 , 1);
        // Assert
        expect(result).toBe(0);
    })

}) 