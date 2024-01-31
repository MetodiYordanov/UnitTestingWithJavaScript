import { sum } from './sumOfNumbers.js';
import { expect } from 'chai';

describe('sum', () => {
    it('should return 0 if an empty array is given', () => {
        // Arrange
        const inputArray = [];

        // Act
        const result = sum(inputArray);

        // Assert
        expect(result).to.equals(0);
    });

    it('should return the single element as a sum if a single element array is given', () => {
        // Arrange
        const inputArray = [33];

        // Act
        const result = sum(inputArray);

        // Assert
        expect(result).to.equals(33);
    });

    it('should return the total sum of an array if a multi value array is given', () => {
        // Arrange
        const inputArray = [1, 2, 3];

        // Act
        const result = sum(inputArray);

        // Assert
        expect(result).to.equals(6);
    });
});