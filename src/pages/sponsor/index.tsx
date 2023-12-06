import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Wrapper } from '../../comps/Layout';
import { ReactComponent as PaypalIcon} from './paypal-color.svg';
import { ReactComponent as BuyMeACoffeeIcon} from './bmc-full-logo.svg';

const SponsorWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  img + img {
    margin-left: 1rem;
  }
  @media (max-width: 590px) {
    img + img {
      margin-left: 0;
    }
  }
`;

const SubTitle = styled.li`
  list-style: none;
  font-weight: bold;
  margin: 0;
  padding: 0;
  margin-left: -16px;
  padding: 5px 0;
  color: var(--color-fg-subtle);
`;

export const Component: FC<PropsWithChildren> = () => {
  const { t } = useTranslation();
  return (
    <SponsorWrapper>
      <h1>{t('sponsor.title')}</h1>
      <p>{t('sponsor.info')}</p>
      <a href="https://www.paypal.com/paypalme/kennyiseeyou" target="_blank">
        <PaypalIcon height={54} />
      </a>
      <a href="https://www.buymeacoffee.com/jaywcjlove" target="_blank">
        <BuyMeACoffeeIcon height={54} />
      </a>
      <p>
        <img src="/sponsor-alipay.jpg" width="250" />
        <img src="/sponsor-weixin.jpg" width="250" />
      </p>
      <p>{t('sponsor.info2')}</p>
      <h2>{t('sponsor.supporters')}</h2>
      <p>{t('sponsor.thankful')}</p>
      <ul>
        <SubTitle>{t('sponsor.alipay')}</SubTitle>
        <li>**南</li>
        <li>*港</li>
        <li>*杰</li>
        <li>**明</li>
        <SubTitle>{t('sponsor.paypal')}</SubTitle>
        <li>Chao Yi</li>
        <SubTitle>{t('sponsor.wechatpay')}</SubTitle>
        <li>梦轩</li>
        <li>鱼先森是个...</li>
        <li>Kevin®</li>
        <SubTitle>{t('sponsor.buymeacoffee')}</SubTitle>
        <li>VolFervor</li>
        <li>Observed Observer</li>
      </ul>
    </SponsorWrapper>
  );
};
