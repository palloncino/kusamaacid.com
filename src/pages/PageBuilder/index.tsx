import { Text } from '../../components';

function pageBuilder(view: string) {
  return (
    <div className='page-wrapper'>
      <Text textType='h1'>{view}</Text>
      <Text textType='h3'>{view}</Text>
      <Text textType='h4'>{view}</Text>
      <Text textType='regular'>{view}</Text>
      <Text textType='small'>{view}</Text>
      <Text textType='tooltip'>{view}</Text>
    </div>
  );
}

export default pageBuilder;