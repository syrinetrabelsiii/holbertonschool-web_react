import React from "react";
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer() {
  return (
    <p>
      Copyright {getFullYear()} - {getFooterCopy(true)}
    </p>
  );
}

export default Footer;
