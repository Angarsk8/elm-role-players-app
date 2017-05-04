import 'ace-css/css/ace.css';
import 'font-awesome/css/font-awesome.css'

import './index.html'
import Elm from './Main.elm'

const mountNode = document.getElementById('main')
const app = Elm.Main.embed(mountNode)