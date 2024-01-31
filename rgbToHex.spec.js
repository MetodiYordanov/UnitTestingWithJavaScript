import { rgbToHexColor } from './rgbToHex.js';
import { expect } from 'chai';

describe('rgbToHexColor', () => {
    it('should return hexadecimal value when all values are valid', () => {
        // Arrange
        const redValue = 126;
        const greenValue = 74;
        const blueValue = 29;

        // Act
        const result = rgbToHexColor(redValue, greenValue, blueValue);

        // Assert
        expect(result).to.equals('#7E4A1D');
    });
    it('should return hexadecimal value when all values are at max', () => {
        // Arrange
        const redValue = 255;
        const greenValue = 255;
        const blueValue = 255;

        // Act
        const result = rgbToHexColor(redValue, greenValue, blueValue);

        // Assert
        expect(result).to.equals('#FFFFFF');
    });
    it('should return hexadecimal value when all values are at min', () => {
        // Arrange
        const redValue = 0;
        const greenValue = 0;
        const blueValue = 0;

        // Act
        const result = rgbToHexColor(redValue, greenValue, blueValue);

        // Assert
        expect(result).to.equals('#000000');
    });
    it('should return undefined when red value is not in bounds', () => {
        // Arrange
        const positiveRedValueBounds = 345;
        const negativeRedValueBounds = -16;
        const greenValue = 74;
        const blueValue = 29;

        // Act
        const positiveBoundsResult = rgbToHexColor(positiveRedValueBounds, greenValue, blueValue);
        const negativeBondsResult = rgbToHexColor(negativeRedValueBounds, greenValue, blueValue);

        // Assert
        expect(positiveBoundsResult).to.be.undefined;
        expect(negativeBondsResult).to.be.undefined;
    });
    it('should return undefined when red value is not number', () => {
        // Arrange
        const redValueNotNum = 'banana';
        const greenValue = 74;
        const blueValue = 29;

        // Act
        const notNumResult = rgbToHexColor(redValueNotNum, greenValue, blueValue);

        // Assert
        expect(notNumResult).to.be.undefined;
    });
    it('should return undefined when green value is not in bounds', () => {
        // Arrange
        const redValue = 126;
        const negativeGreenValueBounds = -16;
        const positiveGreenValueBounds = 315;
        const blueValue = 29;

        // Act
        const negativeBoundsResult = rgbToHexColor(redValue, negativeGreenValueBounds, blueValue);
        const positiveBoundsResult = rgbToHexColor(redValue, positiveGreenValueBounds, blueValue);

        // Assert
        expect(negativeBoundsResult).to.be.undefined;
        expect(positiveBoundsResult).to.be.undefined;
    });
    it('should return undefined when green value is not number', () => {
        // Arrange
        const redValue = 126;
        const greenValueNotNum = 'banana';
        const blueValue = 29;

        // Act
        const notNumResult = rgbToHexColor(redValue, greenValueNotNum, blueValue);

        // Assert
        expect(notNumResult).to.be.undefined;
    });
    it('should return undefined when blue value is not in bounds', () => {
        // Arrange
        const redValue = 126;
        const greenValue = 74;
        const negativeBlueValueBounds = -125;
        const positiveBlueValueBounds = 453;

        // Act
        const negativeBoundsResult = rgbToHexColor(redValue, greenValue, negativeBlueValueBounds);
        const positiveBoundsResult = rgbToHexColor(redValue, greenValue, positiveBlueValueBounds);

        // Assert
        expect(negativeBoundsResult).to.be.undefined;
        expect(positiveBoundsResult).to.be.undefined;
    });
    it('should return undefined when blue value is not number', () => {
        // Arrange
        const redValue = 126;
        const greenValue = 74;
        const blueValueNotNum = 'banana';

        // Act
        const notNumResult = rgbToHexColor(redValue, greenValue, blueValueNotNum);

        // Assert
        expect(notNumResult).to.be.undefined;
    });
});