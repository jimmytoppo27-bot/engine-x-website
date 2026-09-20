const TOPIC_DATA = {
  machines: {
    name: 'Machines',
    icon: '⚙️',
    lives: 'Found inside factories, workshops and industrial equipment.',
    description: 'Machines convert energy into controlled motion through connected mechanical parts working together in sequence — gears, shafts and bearings transferring force with minimal loss.',
    layers: [
      { id: 'housing', name: 'Outer Housing', color: '#5ea7ff' },
      { id: 'gear', name: 'Gear Assembly', color: '#8a6cff' },
      { id: 'shaft', name: 'Drive Shaft', color: '#3fd0c9' },
      { id: 'bearing', name: 'Bearings', color: '#ffb454' },
      { id: 'motor', name: 'Motor Core', color: '#ff6b81' },
      { id: 'frame', name: 'Base Frame', color: '#6f89ad' }
    ]
  },
  innovation: {
    name: 'Innovation',
    icon: '💡',
    lives: 'Found in R&D labs, prototypes and emerging consumer devices.',
    description: 'Innovation layers combine sensing, computing and power delivery into compact new products — each layer is refined and re-engineered as the idea matures.',
    layers: [
      { id: 'shell', name: 'Outer Shell', color: '#5ea7ff' },
      { id: 'sensor', name: 'Sensor Array', color: '#8a6cff' },
      { id: 'circuit', name: 'Circuit Layer', color: '#3fd0c9' },
      { id: 'battery', name: 'Power Cell', color: '#ffb454' },
      { id: 'control', name: 'Control Unit', color: '#ff6b81' }
    ]
  },
  technology: {
    name: 'Technology',
    icon: '💻',
    lives: 'Found inside computers, phones and smart electronic systems.',
    description: 'Modern technology stacks a display, a processor and support circuitry into a single device, with cooling and housing protecting the delicate layers inside.',
    layers: [
      { id: 'display', name: 'Display Layer', color: '#5ea7ff' },
      { id: 'processor', name: 'Processor Core', color: '#8a6cff' },
      { id: 'board', name: 'Circuit Board', color: '#3fd0c9' },
      { id: 'cooling', name: 'Cooling System', color: '#ffb454' },
      { id: 'housing', name: 'Housing', color: '#6f89ad' }
    ]
  },
  automobile: {
    name: 'Automobile',
    icon: '🚗',
    lives: 'Sits under the hood, at the front of most passenger cars.',
    description: 'The engine converts fuel into motion: the valve cover seals the top, the cylinder head and block house combustion, and the rotating assembly turns that force into rotation.',
    engine: true,
    layers: [
      { id: 'valve-cover', name: 'Valve Cover', color: '#c94b4b' },
      { id: 'cylinder-head', name: 'Cylinder Head', color: '#8fa1bc' },
      { id: 'engine-block', name: 'Engine Block', color: '#5ea7ff' },
      { id: 'rotating-assembly', name: 'Rotating Assembly', color: '#8a6cff' },
      { id: 'manifolds', name: 'Manifolds', color: '#b98a5e' },
      { id: 'oil-pan', name: 'Oil Pan', color: '#3a4a63' }
    ]
  },
  space: {
    name: 'Space',
    icon: '🚀',
    lives: 'Sits on the launch pad, bound for orbit or beyond.',
    description: 'A rocket stacks a payload on top of fuel tanks and an engine nozzle, with a guidance system keeping the whole vehicle on course.',
    layers: [
      { id: 'nose', name: 'Nose Cone', color: '#5ea7ff' },
      { id: 'payload', name: 'Payload Bay', color: '#8a6cff' },
      { id: 'tank', name: 'Fuel Tank', color: '#3fd0c9' },
      { id: 'guidance', name: 'Guidance System', color: '#ffb454' },
      { id: 'nozzle', name: 'Engine Nozzle', color: '#ff6b81' }
    ]
  },
  marine: {
    name: 'Marine',
    icon: '🚢',
    lives: 'Found below deck and beneath the waterline of a ship.',
    description: 'A ship\'s hull surrounds an engine room and ballast tanks, transferring power through a propeller shaft to a rudder that steers the vessel.',
    layers: [
      { id: 'hull', name: 'Hull', color: '#5ea7ff' },
      { id: 'engine-room', name: 'Engine Room', color: '#8a6cff' },
      { id: 'ballast', name: 'Ballast Tanks', color: '#3fd0c9' },
      { id: 'shaft', name: 'Propeller Shaft', color: '#ffb454' },
      { id: 'rudder', name: 'Rudder', color: '#ff6b81' }
    ]
  }
};
