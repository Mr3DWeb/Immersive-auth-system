import { useEffect,useRef } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import useAuthStore from "../store/store";

function AnimationManager(){
  const {camera} = useThree();

  const view = useAuthStore((state) => state.view);
  const status = useAuthStore((state) => state.status);
  const setStatus = useAuthStore((state) => state.setStatus);
  const setIsAnimating = useAuthStore((state) => state.setIsAnimating);

  const prevView = useRef(view);
  const prevStatus = useRef(status);

  //---Animation Function----
  const animateToSignUp = () => {
    setIsAnimating(true);
    
    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
      }
    });
    
    tl.to({}, { duration: 0.1, onStart: () => setStatus('tunnel') })
      .to(camera.position, {
        z: -6,
        duration: 2.5,
        ease: 'power2.inOut',
      }, 0)
      .to(camera.rotation, {
        y: Math.PI,
        duration: 2.5,
        ease: 'power2.inOut',
      }, 0)
      .call(() => setStatus('idle'));
  };

  const animateToLogin = () => {
    setIsAnimating(true);
    
    const tl = gsap.timeline({
      onComplete: () => setIsAnimating(false)
    });

    tl.to({}, { duration: 0.1, onStart: () => setStatus('tunnel') })
      .to(camera.position, {
        z: 6, // برگشت به جلو
        duration: 2.5,
        ease: 'power2.inOut',
      }, 0)
      .to(camera.rotation, {
        y: 0, // چرخش به حالت 0
        duration: 2.5,
        ease: 'power2.inOut',
      }, 0)
      .call(() => setStatus('idle'));
  };

  const animateToDashboard = () => {
    // انیمیشن خروج از صحنه لاگین
    gsap.to(camera.position, {
      z: 20, // دور شدن
      y: 10,
      duration: 2,
      ease: 'power3.in'
    });
    // اینجا می‌توانید روتینگ Next.js را صدا بزنید یا کامپوننت داشبورد را نمایش دهید
  };

  //---useEffects
  useEffect(()=>{
    if(prevView.current !== view){
      if(view === 'signup' && prevView.current === 'login'){
        animateToSignUp();
      } else if (view === 'login' && prevView.current === 'signup') {
        animateToLogin();
      } else if (view === 'dashboard') {
        animateToDashboard();
      }
      prevView.current = view;
    }
  },[view]);

  useEffect(()=>{
    if (status === 'success' && prevStatus.current !== 'success'){
      setTimeout(() => {
        useAuthStore.getState().setView('dashboard');
      }, 1500);
    }
    prevStatus.current = status;
  },[status]);


  return null;
}

export default AnimationManager;