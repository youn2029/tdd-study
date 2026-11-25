import { describe, it, expect } from 'vitest';
// 이 파일은 아직 없습니다. 테스트가 빨간불이 되는 것부터가 1주차 시작입니다.
import { PaymentCalculator } from './PaymentCalculator';

describe('PaymentCalculator', () => {
  it('시술이 없으면 결제 금액은 0원이다', () => {
    const calculator = new PaymentCalculator();
    expect(calculator.total([])).toBe(0);
  });

  // 세션에서 요구사항을 듣고, 테스트 목록을 여기에 직접 적어 보세요
});
