import { my_account } from './BadgeLinkData';
import { RiExternalLinkLine } from 'react-icons/ri';

const how_to_build = {
  _title: 'Hello React',
  _account: [my_account],
  _text: [
    <p>sample<br/>sample</p>,
    <p>sample<RiExternalLinkLine/></p>
  ],
  _console_title: 'Terminal',
  _console: ['$sample', '$sample']
}

export const cards = [how_to_build, how_to_build, how_to_build, how_to_build, how_to_build];
