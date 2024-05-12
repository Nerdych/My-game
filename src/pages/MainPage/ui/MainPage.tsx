import {Button} from '@shared/ui-kit/Button';
import {Details} from '@shared/ui-kit/Details';
import {Heading} from '@shared/ui-kit/Heading';
import {Input} from '@shared/ui-kit/Input';
import {useTranslation} from 'react-i18next';

function MainPage() {
  const {t, i18n} = useTranslation('mainPage');

  return (
    <>
      <Input label="Название пака" placeholder="Музыкальный пак by Nerd" />
      <Button variant="regular">Что?</Button>
      <Heading as="h1" weight="bold">
        {t('packName', {defaultValue: 'what?'})}
      </Heading>
      {/* <Details
        header={
          <Heading as="h5" weight="bold">
            Dа это жестко
          </Heading>
        }
      >
        <div style={{width: '25rem'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officia laudantium commodi libero
          voluptate quas quidem sint! Voluptatem doloremque saepe accusamus vero facere asperiores odio voluptatibus
          sunt deserunt, tenetur commodi dolores velit incidunt, quasi ipsa harum animi? Iure facilis accusantium eum
          quam, sunt cupiditate laborum placeat exercitationem aliquam ea quos suscipit rerum quia praesentium, atque
          dicta numquam hic ipsam, sequi tempora officiis necessitatibus? Ipsam placeat officia veritatis dolore fuga a,
          quas, ducimus mollitia atque commodi hic quod deserunt repudiandae modi obcaecati amet voluptatem illum enim.
          Eveniet libero tempora labore similique, minus enim voluptate voluptates deleniti impedit maxime inventore
          explicabo sequi.
        </div>
      </Details> */}
      <Details header={<Input variant="ghost" bold placeholder="Музыкальный пак by Nerd" />}>
        <div style={{height: '10rem'}}>Тонна контента</div>
      </Details>
    </>
  );
}

export default MainPage;
