const Actions = {
  showRedaction: (id) => {
    return {
      type: 'REDACTION:SHOW_REDACTION',
      payload: id
    }
  },
  hideRedaction: () => {
    return {
      type: 'REDACTION:HIDE_REDACTION'
    }
  }
}

export default Actions