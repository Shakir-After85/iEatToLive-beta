import react from "react";

export const InformVids = () => {
  return (
    <div>
      <h1>
        I bet you've been reading quite a lot, sit back and watch a couple of
        videos on healthy eating
      </h1>
      <ul className="list-group videos">
        <li className="list-group-item">
          video 1
          <img src="https://www.youtube.com/watch?v=VBlkJ0Xi9Ms&ab_channel=WatchMojo.com" />
        </li>
        <li className="list-group-item">
          video 2
          <img src="https://www.youtube.com/watch?v=VBlkJ0Xi9Ms&ab_channel=WatchMojo.com" />
        </li>
        <li className="list-group-item">
          video 3
          <img src="https://www.youtube.com/watch?v=VBlkJ0Xi9Ms&ab_channel=WatchMojo.com" />
        </li>
      </ul>
    </div>
  );
};
