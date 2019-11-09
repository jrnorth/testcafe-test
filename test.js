fixture`Screenshot Test`.page`https://devexpress.github.io/testcafe/example`

test('Fails on purpose to generate a screenshot', async t => {
  await t.click('this-element-doesnt-exist')
})
