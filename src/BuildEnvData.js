import { my_account } from './BadgeLinkData';
import { RiExternalLinkLine } from 'react-icons/ri';

const build_nodejs = {
  _title: 'Add Node.js',
  _account: [my_account],
  _text: [
    <p>First of all, you download source code of 'Node.js'
      <a href='https://nodejs.org/en/download/' target='_brank'><RiExternalLinkLine/></a>, and extract it using archive manager etc. </p>,
    <p>I recommend that you set the decompression destination to '/use/local/'. </p>,
    <p>DON'T forget to add it to your PATH !</p>,
    <p>Like a terminal, it is okey if the version comes out.</p>
  ],
  _console_title: 'Terminal',
  _console: ['-- Add to path --', '$ export PATH=/usr/local/node-vxx.xx.x-linux-x64/bin:${PATH}', '$ node --version', 'vxx.xx.x']
}

const build_yarn = {
  _title: 'Add yarn',
  _account: [my_account],
  _text: [
    <p>After adding Node.js, you install 'yarn'<a href='https://yarnpkg.com/' target='_brank'><RiExternalLinkLine/></a> using 'npm'. </p>,
    <p>'Npm' is included in 'Node.js'.</p>,
    <p>Like a terminal, it is okey if the version comes out.</p>
  ],
  _console_title: 'Terminal',
  _console: ['$ npm install --global yarn', '$ yarn --version', 'x.xx.xx']
}

const build_create_react_app = {
  _title: 'Add create-react-app',
  _account: [my_account],
  _text: [
    <p>Finally, you install 'create-react-app'<a href='https://create-react-app.dev/' target='_brank'><RiExternalLinkLine/></a> using 'yarn'. </p>,
    <p> if you done all steps, let's 'npx create-react-app hogehoge' ! </p>
  ],
  _console_title: 'Terminal',
  _console: ['$ yarn global add create-react-app']
}

export const cards = [build_nodejs, build_yarn, build_create_react_app];
