// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import { withPrefix } from 'gatsby-link';
import styles from './Avatar.module.scss';
import { useSiteMetadata } from '../../../hooks';

type Props = {
  photo: string;
  name: string;
  bio?: string;
};

const Avatar = ({ photo, name, bio }:Props) => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles["avatar"]}>
      <div className={styles["container"]}>
        <div className={styles["author2"]}>
          <a href="/">
            <img
              width="110"
              height="110"
              src={withPrefix(photo)}
              alt="Skytsunami"
            />
          </a>
        </div>
      </div>

      <h1 className={styles["avatar__title"]}>
        <Link className={styles["avatar__title-link"]} to="/">
          {name}
        </Link>
      </h1>
      <p className={styles["avatar__subtitle"]}>{bio}</p>
    </div>
  );
};

export default Avatar;
