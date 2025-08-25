import { parseEventDateTime } from './changes.js';

describe('parseEventDateTime', () => {
  test('should parse all-day events with date property', () => {
    const event = {
      date: '2024-03-15'
    };
    
    const result = parseEventDateTime(event);
    
    expect(result).toBeInstanceOf(Date);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(2); // March is month 2 (0-indexed)
    expect(result.getDate()).toBe(15);
  });

  test('should parse timed events with dateTime property', () => {
    const event = {
      dateTime: '2024-03-15T14:30:00Z'
    };
    
    const result = parseEventDateTime(event);
    
    expect(result).toBeInstanceOf(Date);
    expect(result.toISOString()).toBe('2024-03-15T14:30:00.000Z');
  });
});
