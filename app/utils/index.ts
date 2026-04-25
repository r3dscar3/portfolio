export const renderHTMLTemplate = (
  html: string,
  vars: Record<string, string | null | undefined>
): string => {
  html = html.replace(
    /\{\{#if (\w+)\}\}([\s\S]*?)\{\{\/if\}\}/g,
    (_, key: string, block: string) => {
      return vars[key] ? block : '';
    }
  );
  return Object.entries(vars).reduce((acc, [key, value]) => {
    return acc.replaceAll(`{{${key}}}`, value ?? '');
  }, html);
};
