import React from 'react';

import { GrGithub } from 'react-icons/gr';
import { FaDribbble, FaTwitter } from 'react-icons/fa';

import * as S from './styles';
import { getImageUrl } from 'utils/getImageUrl';
import { AuthorProps } from 'types/api';

const icons = {
  twitter: <FaTwitter />,
  github: <GrGithub />,
  dribbble: <FaDribbble />
};

const ProfileCard: React.FC<AuthorProps> = ({
  name,
  role,
  photo,
  socialLinks,
  description
}) => (
  <S.Card key={name}>
    <S.Image src={getImageUrl(photo.url)} alt={photo.alternativeText} />
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialLinks.map((item) => (
        <S.Link key={item.url}>
          <a href={item.url} title={item.title}>
            {icons[item.title.toLowerCase()]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>{description}</S.Description>
  </S.Card>
);

export default ProfileCard;
