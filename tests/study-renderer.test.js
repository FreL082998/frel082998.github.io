const assert = require('assert');
const { parseStudyMeta, prepareStudyContent } = require('../assets/js/study-renderer.js');

const markdown = `# Purchasing Support System

**Industry:** Manufacturing
**Role:** Technical Lead / Full-Stack Developer
**Project Type:** Enterprise Procurement and Approval Workflow System
**Primary Technologies:** Laravel, PHP, Next.js, TypeScript, Tailwind CSS, MySQL, Docker, AWS

## Project Overview

The platform streamlined procurement workflows.

## Skills Demonstrated

**Full-Stack Development:** Laravel, PHP, Next.js, TypeScript
**Architecture:** System design, API development
`;

const meta = parseStudyMeta(markdown);
assert.strictEqual(meta.title, 'Purchasing Support System');
assert.ok(meta.subtitle.includes('Manufacturing'));

const prepared = prepareStudyContent(markdown);
assert.ok(prepared.bodyMarkdown.includes('## Project Overview'));
assert.ok(!prepared.bodyMarkdown.includes('**Industry:**'));
assert.ok(!prepared.bodyMarkdown.includes('**Primary Technologies:**'));
assert.strictEqual(prepared.metadata.fields.length, 4);
assert.strictEqual(prepared.metadata.skills.length, 2);
assert.strictEqual(prepared.metadata.skills[0].label, 'Full-Stack Development');
assert.strictEqual(prepared.metadata.skills[0].value, 'Laravel, PHP, Next.js, TypeScript');

console.log('study renderer tests passed');
