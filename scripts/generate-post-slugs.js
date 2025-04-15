// generate-post-slugs.js
const fs = require('fs');
const path = require('path');

const postsDirectory = path.join(__dirname, '../src/assets/posts'); // Caminho para a pasta de posts
const outputFile = path.join(__dirname, '../src/app/services/post-slugs.generated.ts'); // Arquivo de saída

try {
  // Ler todos os arquivos no diretório
  const files = fs.readdirSync(postsDirectory);

  // Filtrar apenas arquivos .md e extrair o nome sem a extensão
  const slugs = files
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, '')); // Remove a extensão .md

  // Gerar o conteúdo do arquivo TypeScript
  const fileContent = `// ATENÇÃO: Este arquivo é gerado automaticamente. Não edite manualmente.
// Execute 'node generate-post-slugs.js' para atualizar.

export const postSlugs: string[] = ${JSON.stringify(slugs, null, 2)};
`;

  // Escrever o arquivo TypeScript
  fs.writeFileSync(outputFile, fileContent, 'utf8');

  console.log(`✅ Arquivo de slugs gerado com sucesso em: ${outputFile}`);
  console.log(`   Slugs encontrados: ${slugs.join(', ')}`);

} catch (error) {
  console.error('❌ Erro ao gerar o arquivo de slugs:', error);
  process.exit(1); // Sai com código de erro
}
