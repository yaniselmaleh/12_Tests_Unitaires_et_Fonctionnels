import Sum from "../Components/Sum"
import Moin from "../Components/Moin"
import Multiple from "../Components/Multiple"
import Div from "../Components/Div"

test('1 + 2 to equal 3', () => {
  expect(Sum(1, 2)).toBe(3);
});

test('2 - 1 to equal 1', () => {
  expect(Moin(2, 1)).toBe(1);
});

test('2 * 2 to equal 4', () => {
  expect(Multiple(2, 2)).toBe(4);
});

test('2 / 2 to equal 1', () => {
  expect(Div(2, 2)).toBe(1);
});
