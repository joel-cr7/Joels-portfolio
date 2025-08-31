import React, { useEffect, useState } from "react";

function StarBackground() {
  // list of stars, where each star contains object properties {id, size, x, y, opacity, animationDuration}
  // x, y is the view port position in percent (for 0 to 100 anywhere)
  const [stars, setStars] = useState([]);

  // list of meteors, where each meteor contains object properties {id, size, x, y, delay, animationDuration}
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    // if screen is small then again generate stars with the particular screen size
    const handleResize = () => {
      generateStars();
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);

  }, []);

  const generateStars = () => {
    // get the total number of stars to be shown based on screen size (larger screen more stars, smaller screen lesser stars)
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1, // random size between 1 and 4 pixels. Math.random() will give random number between 0 and 1
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5, // random opacity between 0 and 1
        animationDuration: Math.random() * 4 + 2, // random duration between 2 to 6 sec
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    // total number of meteors to be shown
    const numberOfMeteors = 4;

    const newMeteors = [];
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1, // random size between 1 and 3 pixels.
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15, // random delay before animation
        animationDuration: Math.random() * 3 + 3, // random duration between 3 to 6 sec
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed z-0 inset-0 pointer-events-none overflow-hidden">
      {/* display the stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {/* display the meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 40 + "px",
            height: meteor.size + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
}

export default StarBackground;
