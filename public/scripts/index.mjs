import Handlebars from 'handlebars/runtime.js';
import updateNotes from './notes.mjs';
import addCompiledTemplatesToHandlebars from '../templatesCompiled.mjs';

addCompiledTemplatesToHandlebars(Handlebars);

updateNotes(Handlebars);
