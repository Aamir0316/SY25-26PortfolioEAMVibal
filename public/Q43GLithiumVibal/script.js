function plotPoint(x0, y0, x, y) {
  console.log(x0, y0, x, y); // this checks the arguments passed to this function
  in1.innerHTML = x0 + " " + y0 + " " + x + " " + y;

  const plane = document.getElementById('coordinatePlane');

  // removed old plotted points before drawing a new one
  const oldPoints = plane.querySelectorAll('.point');
  oldPoints.forEach(point => point.remove());

  const point = document.createElement('div');
  point.className = 'point';

  /* fixed property names so the point is positioned correctly */
  point.style.left = (x - x0 + 200 - 5) + 'px';
  point.style.bottom = (y - y0 + 200 - 5) + 'px';

  plane.appendChild(point);

  if (x > x0 && y > y0) {
    out1.innerHTML = "NE";
  }
  else if (x < x0 && y < y0) {
    out1.innerHTML = "SO";
  }
  else if (x > x0 && y < y0) {
    out1.innerHTML = "SE";
  }
  else if (x < x0 && y > y0) {
    out1.innerHTML = "NO";
  }
  else {
    out1.innerHTML = "divisa";
  }
}