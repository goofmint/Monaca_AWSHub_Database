import Amplify, { API } from 'aws-amplify';
import awsmobile from './aws-exports.js';
Amplify.configure(awsmobile);
window.API = API;