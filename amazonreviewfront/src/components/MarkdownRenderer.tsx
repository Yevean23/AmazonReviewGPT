import React from 'react';
import fs from 'fs';
import { remark } from 'remark';
import reactRenderer from 'remark-react';
import html from 'remark-html';

interface MarkdownRendererProps {
  filePath: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> =  async ({ filePath }) => {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const processedContent = await remark().use(html).processSync(fileContent);
  const contentHtml = processedContent.toString();

  return <div dangerouslySetInnerHTML={{ __html: contentHtml }} />;
};

export default MarkdownRenderer;