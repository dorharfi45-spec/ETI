(function () {
  var svg = document.getElementById('uc');
  var cx = 170, cy = 200, r = 120;
  var unit = 'deg';
  var theta = 0; // radians, internal source of truth

  var anglePointGroup = document.getElementById('anglePointGroup');
  var tanPointGroup = document.getElementById('tanPointGroup');
  var anglePointVisual = document.getElementById('anglePointVisual');
  var tanPointVisual = document.getElementById('tanPointVisual');
  var radiusLine = document.getElementById('radius');
  var radiusExt = document.getElementById('radiusExt');
  var cosLine = document.getElementById('cosLine');
  var sinLine = document.getElementById('sinLine');
  var tanSeg = document.getElementById('tanSeg');

  var valTheta = document.getElementById('valTheta');
  var valSin = document.getElementById('valSin');
  var valCos = document.getElementById('valCos');
  var valTan = document.getElementById('valTan');
  var valQuad = document.getElementById('valQuad');
  var jsStatus = document.getElementById('jsStatus');

  function svgPoint(evt) {
    var pt = svg.createSVGPoint();
    pt.x = evt.clientX;
    pt.y = evt.clientY;
    var ctm = svg.getScreenCTM();
    if (!ctm) return { x: 0, y: 0 };
    return pt.matrixTransform(ctm.inverse());
  }

  function quadrantLabel(deg) {
    var d = ((deg % 360) + 360) % 360;
    if (d === 0 || d === 90 || d === 180 || d === 270) return 'axis';
    if (d < 90) return 'I';
    if (d < 180) return 'II';
    if (d < 270) return 'III';
    return 'IV';
  }

  function fmtRad(t) {
    var d = ((t * 180 / Math.PI) % 360 + 360) % 360;
    return (t.toFixed(3)) + ' rad';
  }

  function render() {
    var s = Math.sin(theta);
    var c = Math.cos(theta);
    var t = Math.tan(theta);

    var px = cx + r * c;
    var py = cy - r * s;

    anglePointVisual.setAttribute('cx', px);
    anglePointVisual.setAttribute('cy', py);
    document.getElementById('anglePointHit').setAttribute('cx', px);
    document.getElementById('anglePointHit').setAttribute('cy', py);

    radiusLine.setAttribute('x1', cx);
    radiusLine.setAttribute('y1', cy);
    radiusLine.setAttribute('x2', px);
    radiusLine.setAttribute('y2', py);

    cosLine.setAttribute('x1', cx);
    cosLine.setAttribute('y1', cy);
    cosLine.setAttribute('x2', px);
    cosLine.setAttribute('y2', cy);

    sinLine.setAttribute('x1', px);
    sinLine.setAttribute('y1', cy);
    sinLine.setAttribute('x2', px);
    sinLine.setAttribute('y2', py);

    // tangent line at x = 1 (screen x = cx + r)
    var tanScreenX = cx + r;
    var isFinite_ = isFinite(t) && Math.abs(c) > 1e-6;

    if (isFinite_) {
      var tanY = cy - r * t; // since tan = opposite/adjacent scaled to r
      // clamp so the line doesn't shoot off screen forever
      var maxOff = 170;
      if (tanY < cy - maxOff) tanY = cy - maxOff;
      if (tanY > cy + maxOff) tanY = cy + maxOff;

      tanSeg.setAttribute('x1', tanScreenX);
      tanSeg.setAttribute('y1', cy);
      tanSeg.setAttribute('x2', tanScreenX);
      tanSeg.setAttribute('y2', tanY);
      tanSeg.style.display = '';

      tanPointVisual.setAttribute('cx', tanScreenX);
      tanPointVisual.setAttribute('cy', tanY);
      document.getElementById('tanPointHit').setAttribute('cx', tanScreenX);
      document.getElementById('tanPointHit').setAttribute('cy', tanY);
      tanPointVisual.style.display = '';
      document.getElementById('tanPointHit').style.display = '';

      // dashed extension of the radius line out to the tangent point
      radiusExt.setAttribute('x1', px);
      radiusExt.setAttribute('y1', py);
      radiusExt.setAttribute('x2', tanScreenX);
      radiusExt.setAttribute('y2', tanY);
      radiusExt.style.display = '';
    } else {
      tanSeg.style.display = 'none';
      tanPointVisual.style.display = 'none';
      document.getElementById('tanPointHit').style.display = 'none';
      radiusExt.style.display = 'none';
    }

    var deg = theta * 180 / Math.PI;
    valTheta.textContent = unit === 'deg'
      ? (((deg % 360) + 360) % 360).toFixed(1) + '°'
      : fmtRad(theta);
    valSin.textContent = s.toFixed(3);
    valCos.textContent = c.toFixed(3);
    valTan.textContent = isFinite_ ? t.toFixed(3) : 'undefined';
    valQuad.textContent = quadrantLabel(deg);
  }

  function setThetaFromAnglePoint(evt) {
    var p = svgPoint(evt);
    var dx = p.x - cx;
    var dy = cy - p.y;
    theta = Math.atan2(dy, dx);
    render();
  }

  function setThetaFromTanPoint(evt) {
    var p = svgPoint(evt);
    var tanScreenX = cx + r;
    var dy = cy - p.y; // positive = up
    var tVal = dy / r;
    var newTheta = Math.atan(tVal);
    // preserve which side (left/right half) the angle point is currently on
    var c = Math.cos(theta);
    if (c < 0) {
      newTheta = newTheta + Math.PI;
    }
    theta = newTheta;
    render();
  }

  function makeDraggable(group, handler) {
    var active = false;

    function start(evt) {
      active = true;
      evt.preventDefault();
      evt.stopPropagation();
      handler(evt);
      window.addEventListener('mousemove', move, true);
      window.addEventListener('pointermove', move, true);
      window.addEventListener('mouseup', end, true);
      window.addEventListener('pointerup', end, true);
    }

    function move(evt) {
      if (!active) return;
      evt.preventDefault();
      handler(evt);
    }

    function end(evt) {
      active = false;
      window.removeEventListener('mousemove', move, true);
      window.removeEventListener('pointermove', move, true);
      window.removeEventListener('mouseup', end, true);
      window.removeEventListener('pointerup', end, true);
    }

    group.addEventListener('mousedown', start);
    group.addEventListener('pointerdown', start);
  }

  makeDraggable(anglePointGroup, setThetaFromAnglePoint);
  makeDraggable(tanPointGroup, setThetaFromTanPoint);

  // unit toggle
  var unitButtons = document.querySelectorAll('#unitToggle button');
  unitButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      unit = btn.getAttribute('data-unit');
      unitButtons.forEach(function (b) { b.style.fontWeight = '400'; });
      btn.style.fontWeight = '600';
      updatePresetLabels();
      render();
    });
  });

  function updatePresetLabels() {
    var presetButtons = document.querySelectorAll('#presets button');
    presetButtons.forEach(function (b) {
      if (unit === 'deg') {
        b.textContent = b.getAttribute('data-deg') + '°';
      } else {
        b.textContent = b.getAttribute('data-rad');
      }
    });
  }

  // preset buttons
  var presetButtons = document.querySelectorAll('#presets button');
  presetButtons.forEach(function (b) {
    b.addEventListener('click', function () {
      var deg = parseFloat(b.getAttribute('data-deg'));
      theta = deg * Math.PI / 180;
      render();
    });
  });

  jsStatus.textContent = 'Interactive — drag the points below';
  render();
})();
