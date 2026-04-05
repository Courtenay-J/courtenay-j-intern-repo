import { useTranslation } from 'react-i18next';
/*
  HelloWorld: Prints a greeting. Ahh, coding traditions.

  Uses name prop to print a joke version of Focus Bear: e.g. Fozzie Bear, Fuzzy Bean.
*/

export function HelloWorld(name) {
  const [t] = useTranslation();
  
  return (
  <>
    <h1>{t('helloWorld.greeting')}</h1>
    <h2>{t('helloWorld.joke')} "{name.fname} {name.species}"...?</h2>
  </>
  );
 }

