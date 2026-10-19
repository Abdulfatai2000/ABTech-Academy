# Lesson publishing quality checklist

Apply this checklist to every new published lesson. A planned module is not a published lesson.

## Teaching
- [ ] State the learner's prerequisites and one observable learning objective.
- [ ] Introduce unfamiliar terminology before using it.
- [ ] Explain **why** the concept matters in a real mobile app.
- [ ] Progress from one small example to a slightly harder application.
- [ ] Include a misconception and explain how to avoid it.

## Code examples
- [ ] Identify whether the code is a complete runnable screen or a fragment.
- [ ] Include all required imports for complete screens.
- [ ] Avoid unverified package versions and undocumented APIs.
- [ ] Show the expected result without claiming that the website executed code.
- [ ] Use accessible labels and readable UI text where applicable.

## Practice and assessment
- [ ] Provide an exercise with clear acceptance criteria.
- [ ] Offer a hint without immediately revealing the answer.
- [ ] Explain correct and incorrect quiz choices.
- [ ] Permit learners to retry; do not equate reading progress with mastery.
- [ ] Include a quick self-check that can be answered without a code runner.

## Release checks
- [ ] Confirm unique stable lesson/step IDs and correct module references.
- [ ] Update inventory documentation and navigation references.
- [ ] Check desktop/mobile presentation and keyboard navigation.
- [ ] Run `npm run lint`, `npm run typecheck`, `npm run build`, and applicable browser tests.
- [ ] Check the content against official React, React Native or Expo documentation.
