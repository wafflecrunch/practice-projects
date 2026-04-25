fn main2() {
    println!("Hello, world!");
}
use std::thread;

fn main(){
    for _ in 0..300{
        thread::spawn(|| {
            let mut counter: f64 = 0.00;
            loop{
                counter +=0.001;
            }
        });
    }

    loop {
    }
}



