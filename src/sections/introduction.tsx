import { FunctionalComponent } from "preact";
import { useState, useEffect } from "preact/hooks";

export const Introduction: FunctionalComponent = ({}) => {
  const welcomeMessages = [
    "🎉 Kaabọ!",
    "🎉 Welcome!",
    "🎉 Nyase!",
    "🎉 Ndewo!",
    "🎉 Barka da zuwa!",
  ];

  const getRandomMessage = () => {
    return welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
  };

  const [currentMessage, setCurrentMessage] = useState(getRandomMessage);

  useEffect(() => {
    setCurrentMessage(getRandomMessage());
  }, []);

  return (
    <>
      <div class="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8">
        <div class="relative flex items-center gap-x-4">
          <div class="text-sm leading-6"></div>
        </div>
        <p class="text-2xl mt-6 font-medium lg:text-3xl tracking-tight text-primary dark:text-white">
          {currentMessage}
        </p>
        <p class="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-xl">
          Let’s be real—backend devs are the true villains of web development.
          <br /> <br />
          Why? Because they can always claim, "I'm done!" and leave you to
          figure out why it’s still broken. It’s a genius move, really, buying
          themselves extra time while you scramble to prove them wrong.
          <br /> <br />
          But with this UI kit in your arsenal? Oh, you'll put them to shame at
          every standup, faster than they can say "It works on my machine." 😎{" "}
          <br />
          <br />
        </p>
      </div>
    </>
  );
};
