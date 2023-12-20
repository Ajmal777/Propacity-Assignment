import { ConfigProvider } from 'antd'
import React from 'react'

const ModalConfig = ({ color, children }) => {
  return (
    <ConfigProvider theme={{
        components: {
            Modal: {
                contentBg: color,
                footerBg: color,
                headerBg: color,
            }
        }
    }}>
        {children}
    </ConfigProvider>
  )
}

export default ModalConfig;