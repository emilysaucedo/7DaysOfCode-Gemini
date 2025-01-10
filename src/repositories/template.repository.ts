import { Template } from "../entities/template.entity";

let templates: Template[] = [];

const findAllTemplates = () => {
  return templates;
};

const saveTemplate = (template: Template) => {
  templates.push(template);
  return template;
};

const findTemplateById = (id: string): Template | undefined => {
  return templates.find((template) => template.getId() === id);
};

const removeTemplate = (id: string) => {
  templates = templates.filter((template: Template) => template.getId() !== id);
};

const resetTemplatesDb = () => {
  templates = [];
};

export {
  findTemplateById,
  findAllTemplates,
  saveTemplate,
  removeTemplate,
  resetTemplatesDb,
};

/*
O que é?
Um repositório é uma camada que interage diretamente com o banco de dados ou qualquer outra fonte de dados.
Por que criar?
Para centralizar a lógica de acesso a dados, como consultas SQL ou chamadas a APIs externas.
O que faz?
Define métodos para criar, ler, atualizar ou deletar dados no banco de dados (CRUD).
Facilita mudanças no banco de dados sem impactar outras camadas.
*/