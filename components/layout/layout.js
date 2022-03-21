import { Fragment, useContext } from 'react';
import Notification from '../ui/notification';
import NotificationContext from '../../store/notification-context';
import MainHeader from './main-header';

function Layout(props) {
  const notificationCtx = useContext(NotificationContext);

  const activeNotifiication = notificationCtx.notification;
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      {activeNotifiication && (
        <Notification
          title={activeNotifiication.title}
          message={activeNotifiication.message}
          status={activeNotifiication.status}
        />
      )}
    </Fragment>
  );
}

export default Layout;
