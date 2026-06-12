const IMPACT_NUMBER_PATTERN = /(\d[\d,]*\+?|\b2036\b|\b10 years\b)/g;
const IMPACT_NUMBER_TEST = /^(\d[\d,]*\+?|2036|10 years)$/;

export function highlightImpactNumbers(text: string) {
  return text.split(IMPACT_NUMBER_PATTERN).map((part, index) =>
    IMPACT_NUMBER_TEST.test(part) ? (
      <span key={`${part}-${index}`} className="font-bold text-secondary">
        {part}
      </span>
    ) : (
      part
    )
  );
}
