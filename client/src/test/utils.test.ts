import { describe, it, expect, vi } from 'vitest';

/**
 * Utility function tests for ClassConnectLive
 * These tests demonstrate testing patterns for the application
 */

// Example utility functions to test
const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
};

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

describe('Date Formatting', () => {
  it('should format date correctly', () => {
    const date = new Date('2026-01-29');
    const formatted = formatDate(date);
    expect(formatted).toContain('29');
    expect(formatted).toContain('2026');
  });

  it('should handle different dates', () => {
    const date = new Date('2025-12-25');
    const formatted = formatDate(date);
    expect(formatted).toContain('25');
    expect(formatted).toContain('Dec');
  });
});

describe('Email Validation', () => {
  it('should validate correct email addresses', () => {
    expect(validateEmail('user@example.com')).toBe(true);
    expect(validateEmail('test.email@domain.co.uk')).toBe(true);
  });

  it('should reject invalid email addresses', () => {
    expect(validateEmail('invalid-email')).toBe(false);
    expect(validateEmail('@nodomain.com')).toBe(false);
    expect(validateEmail('no@domain')).toBe(false);
    expect(validateEmail('')).toBe(false);
  });
});

describe('Text Truncation', () => {
  it('should truncate long text', () => {
    const longText = 'This is a very long text that needs truncation';
    const truncated = truncateText(longText, 20);
    expect(truncated).toBe('This is a very long ...');
    expect(truncated.length).toBe(23);
  });

  it('should not truncate short text', () => {
    const shortText = 'Short';
    const result = truncateText(shortText, 20);
    expect(result).toBe('Short');
  });

  it('should handle exact length', () => {
    const exactText = 'Exactly twenty chars';
    const result = truncateText(exactText, 20);
    expect(result).toBe('Exactly twenty chars');
  });
});
