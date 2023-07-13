import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');
  const [invites, setinvites] = React.useState([]);
  const [success, setSuccess] = React.useState(false);
  
  React.useEffect(() => {
    fetch('https://reqres.in/api/users').then(result => result.json())
    .then((json) => {
      setUsers(json.data)
    })
    .catch(error => {
      console.warn(error);
      alert('Ошибка при получении пользователей');
    })
    .finally(() => setLoading(false));
  }, [])

    const onChangeSearchValue = (event) => {
      setSearchValue(event.target.value);
    }

    const onClickInvite = (id) => {
      if (invites.includes(id)) {
        setinvites(prev => prev.filter(_id => _id != id)) // проверяем есть ли выбранный id в приглашенных, и если есть, то удаляем
      }
      else {
        setinvites(prev => [...prev, id]); // иначе добавляем новый id ко всем прошлым уже добавленным
      }
    }

    const onClickSendInvites = () => {
      setSuccess(true);
    }

  return (
    <div className="App">
      {
        success ? (
          <Success count={invites.length} />
        ) : (
          <Users 
        items={users} 
        isLoading={isLoading} 
        onChangeSearchValue={onChangeSearchValue} 
        searchValue={searchValue}
        invites={invites}
        onClickInvite={onClickInvite}
        onClickSendInvites={onClickSendInvites} />
        )
      }
    </div>
  );
}

export default App;
