function check(predicate, onSuccess, onFail) {
  const isSuccess = predicate()
  if (isSuccess) {
    onSuccess('yes')
  } else {
    onFail('no')
  }
}

module.exports = check
