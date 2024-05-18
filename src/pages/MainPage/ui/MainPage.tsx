import {Button} from '@shared/ui-kit/Button';
import {Details} from '@shared/ui-kit/Details';
import {Heading} from '@shared/ui-kit/Heading';
import {Input} from '@shared/ui-kit/Input';
import {Select} from '@shared/ui-kit/Select';
import {useTranslation} from 'react-i18next';

function MainPage() {
  const {t, i18n} = useTranslation('mainPage');

  return (
    <>
      <Input min={0} type="number" label="Название пака" placeholder="Музыкальный пак by Nerd" />
      <Button variant="regular">Что?</Button>
      <Heading as="h1" weight="bold">
        {t('packName', {defaultValue: 'what?'})}
      </Heading>
      <Details header={<Input variant="ghost" bold placeholder="Музыкальный пак by Nerd" />}>
        <div style={{height: '10rem'}}>Тонна контента</div>
      </Details>
      <Select
        value={undefined}
        placeholder="зщалупа"
        options={[
          {id: 1, text: 'Первый опшн', value: 'first'},
          {id: 2, text: 'Второй опшн', value: 'second'},
        ]}
      />

      <Select
        value={undefined}
        placeholder="зщалупа"
        variant="ghost"
        options={[
          {id: 1, text: 'Первый опшн', value: 'first'},
          {id: 2, text: 'Второй опшн', value: 'second'},
        ]}
      />
    </>
  );
}

export default MainPage;
