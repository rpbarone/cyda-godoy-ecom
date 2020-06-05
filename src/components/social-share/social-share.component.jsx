import React from 'react';
import {
  EmailShareButton,
  FacebookShareButton,
  PinterestShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  PinterestIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

import './social-share.styles.scss';

const SocialShare = ({ type, link }) => (
  <div className='social-share'>
    <WhatsappShareButton
    url={`Olha o ${type} que eu encontrei no site do Espaço Cyda Godoy: https://cydagodoyxama.com.br${link}`}
    className='share'
    >
        <WhatsappIcon size={28} round={true} />
    </WhatsappShareButton>
    <FacebookShareButton
    url={`https://cydagodoyxama.com.br${link}`}
    className='share'
    >
        <FacebookIcon size={28} round={true} />
    </FacebookShareButton>
    <TwitterShareButton
    url={`https://cydagodoyxama.com.br${link}`}
    className='share'
    >
        <TwitterIcon size={28} round={true} />
    </TwitterShareButton>
    <PinterestShareButton
    url={`https://cydagodoyxama.com.br${link}`}
    className='share'
    >
        <PinterestIcon size={28} round={true} />
    </PinterestShareButton>
    <TelegramShareButton
    url={`https://cydagodoyxama.com.br${link}`}
    className='share'
    >
        <TelegramIcon size={28} round={true} />
    </TelegramShareButton>
    <EmailShareButton
    url={`https://cydagodoyxama.com.br${link}`}
    className='share'
    >
        <EmailIcon size={28} round={true} />
    </EmailShareButton>
  </div>
);

export default SocialShare;