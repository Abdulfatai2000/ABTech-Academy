"use client";
export default function ErrorPage({ reset }: { reset: () => void }) { return <div className="container section" role="alert"><p className="eyebrow">Let’s try that again</p><h1>This page couldn’t load.</h1><p>Your browser’s saved progress has not been cleared. Try reloading this part of the learning space.</p><button className="button" onClick={reset}>Try again</button></div>; }
