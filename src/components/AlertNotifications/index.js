import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  const renderSuccessNotification = () => (
    <Notification>
      <AiFillCheckCircle className="icon success" />
      <div className="message-container">
        <h1 className="message-heading success">Success</h1>
        <p className="message-description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )

  const renderErrorNotification = () => (
    <Notification>
      <RiErrorWarningFill className="icon error" />
      <div className="message-container">
        <h1 className="message-heading error">Error</h1>
        <p className="message-description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const renderWarningNotification = () => (
    <Notification>
      <MdWarning className="icon warning" />
      <div className="message-container">
        <h1 className="message-heading warning">Warning</h1>
        <p className="message-description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const renderInfoNotification = () => (
    <Notification>
      <MdInfo className="icon info" />
      <div className="message-container">
        <h1 className="message-heading info">Info</h1>
        <p className="message-description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  )

  return (
    <div className="alert-notifications-container">
      <div className="alert-notifications-cards">
        <h1 className="heading"> Alert Notifications </h1>
        {renderSuccessNotification()}
        {renderErrorNotification()}
        {renderWarningNotification()}
        {renderInfoNotification()}
      </div>
    </div>
  )
}

export default AlertNotifications
