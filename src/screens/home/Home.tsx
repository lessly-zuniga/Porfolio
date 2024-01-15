
import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../../components/organisms/LanguageSelector';


const Home: React.FC = () => {
    const { t } = useTranslation();

  return (
    <div> 
        <LanguageSelector />
        <section>{t('welcome')}</section>
    </div>
  );
};

export default Home;
