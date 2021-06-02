import updateNotes from './notes.mjs';
import Handlebars from 'handlebars/runtime.js';
import addCompiledTemplatesToHandlebars from '../templatesCompiled.mjs';

addCompiledTemplatesToHandlebars(Handlebars);

updateNotes(Handlebars);
