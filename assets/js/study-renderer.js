(function (root, factory) {
  const moduleExports = factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = moduleExports;
  }
  root.studyRenderer = moduleExports;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  function parseStudyMeta(markdown) {
    const lines = markdown.split(/\r?\n/);
    const heading = lines.find((line) => /^#\s+/.test(line))?.replace(/^#\s+/, '').trim() || 'Case Study';

    const metadataFields = [];
    const fieldPatterns = [
      ['Industry', /^\*\*Industry:\*\*\s*(.+)$/],
      ['Role', /^\*\*Role:\*\*\s*(.+)$/],
      ['Project Type', /^\*\*Project Type:\*\*\s*(.+)$/],
      ['Primary Technologies', /^\*\*Primary Technologies:\*\*\s*(.+)$/]
    ];

    fieldPatterns.forEach(([label, pattern]) => {
      const value = lines.find((line) => pattern.test(line))?.match(pattern)?.[1]?.trim() || '';
      if (value) {
        metadataFields.push({ label, value });
      }
    });

    const skills = [];
    const skillLines = [];
    let inSkillsSection = false;

    for (const line of lines) {
      if (/^##\s+Skills Demonstrated\s*$/.test(line)) {
        inSkillsSection = true;
        continue;
      }

      if (inSkillsSection) {
        if (/^##\s+/.test(line)) {
          break;
        }

        const skillMatch = line.match(/^\*\*(.+?):\*\*\s*(.+)$/);
        if (skillMatch) {
          skillLines.push({ label: skillMatch[1].trim(), value: skillMatch[2].trim() });
        }
      }
    }

    skills.push(...skillLines);

    const bodyLines = [];
    let skipMetadata = false;
    let skipSkills = false;

    for (let index = 0; index < lines.length; index += 1) {
      const line = lines[index];

      if (index === 0 && /^#\s+/.test(line)) {
        continue;
      }

      if (!skipMetadata && fieldPatterns.some(([, pattern]) => pattern.test(line))) {
        continue;
      }

      if (/^##\s+Skills Demonstrated\s*$/.test(line)) {
        skipSkills = true;
        continue;
      }

      if (skipSkills) {
        if (/^##\s+/.test(line)) {
          skipSkills = false;
        } else {
          continue;
        }
      }

      bodyLines.push(line);
    }

    const bodyMarkdown = bodyLines.join('\n').replace(/\n{3,}/g, '\n\n').trim();

    return {
      title: heading,
      subtitle: metadataFields.filter(({ label }) => label !== 'Primary Technologies').map(({ label, value }) => `${label}: ${value}`).join(' • '),
      metadata: {
        fields: metadataFields,
        skills
      },
      bodyMarkdown
    };
  }

  function prepareStudyContent(markdown) {
    return parseStudyMeta(markdown);
  }

  return {
    parseStudyMeta,
    prepareStudyContent
  };
});
