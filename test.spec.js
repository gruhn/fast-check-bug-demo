const fc = require('fast-check')

// the function to be tested
function nasty(array) {
    array.push(1) // nasty argument mutation
    return array
}

test('demo test', () => {
    fc.assert(fc.property(
        fc.array(fc.integer()),
        array_before => {
            const array_after = nasty(array_before)
            // adjust like this, to make the test terminate:
            // const array_after = nasty([...array_before])

            // some random assertion that should eventually fail
            expect(array_after.length).toBeLessThenOrEqual(3)
        }
    ))
})