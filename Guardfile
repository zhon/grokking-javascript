
guard :shell do
  watch(/(examples.*\.js)/) { |m|
  puts m[0]
  `node #{m[0]}`
  }
  watch(/(quiz.*\.js)/) { |m|
    puts m[0]
    `node #{m[0]}`
  }
end
