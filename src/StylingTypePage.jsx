export default function StylingTypePage(){
    
    return (
        
        <div
            style={{
            width: 408,
            height: 852,
            position: "relative",
            overflow: "hidden",
            background: "#fbf2d5",
            alignItems: 'center',
        }}
        >

            <div
                style={{
                width: 150,
                height: 30,
                position: "absolute",
                left: 129,
                top: 144,
                borderRadius: 30,
                background: "#000",
                fontSize: 20,
                color: 'white',         // 글자 색 흰색
                alignItems: 'center',   // 세로 중앙
                justifyContent: 'center',// 가로 중앙
                fontWeight: 600
                }}
            >
                스타일링
            </div>

            <p
                style={{
                position: "absolute",
                left: 56,
                top: 226,
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center",
                color: "#000",
                }}
            >
                <span style={{ fontSize: 20, fontWeight: 600, textAlign: "center", color: "#000" }}>
                soozip과 함께 스타일링 더 알아보고
                </span>
                <br />
                <span style={{ fontSize: 20, fontWeight: 600, textAlign: "center", color: "#000" }}>
                맞춤 솔루션을 찾아보세요
                </span>
            </p>

            <p
                style={{
                position: "absolute",
                left: 103,
                top: 299,
                fontSize: 13,
                fontWeight: 600,
                textAlign: "left",
                color: "#b8b1b1",
                }}
            >
                개인별 맞춤 솔루션을 선택할 수 있습니다.
            </p>

            <button
                style={{
                cursor: "pointer",
                width: 312,
                height: 100,
                position: "absolute",
                left: 48,
                top: 382,
                borderRadius: 12,
                background: "#fff",
                borderWidth: 1,
                borderColor: "#ddd9d9",
                }}
            >
                
            
            </button>   
            
            <p
                style={{
                position: "absolute",
                left: 69,
                top: 395,
                fontSize: 13,
                fontWeight: 600,
                textAlign: "left",
                color: "rgba(0,0,0,0.68)",
                }}
            >
                가구만 배치하고 싶어요 !
            </p>

            <p
            style={{
            position: "absolute",
            left: 69,
            top: 415,
            fontSize: 20,
            fontWeight: 600,
            textAlign: "left",
            color: "#000",
            }}
            >
                배치솔루션
            </p>

            
            <div
                style={{
                width: 50,
                height: 50,
                position: "absolute",
                left: 292,
                top: 406,
                background: "#d9d9d9",
            }}>
                <img src="src/assets/bear.jpg" alt="bear" width="50" height="50"/>
            </div>
        
            <button
                style={{
                cursor: "pointer",
                width: 312,
                height: 100,
                position: "absolute",
                left: 48,
                top: 498,
                borderRadius: 12,
                background: "#fff",
                borderWidth: 1,
                borderColor: "#ddd9d9",
                }}
            >
                
            </button>   
            <p
                style={{
                position: "absolute",
                left: 70,
                top: 510,
                fontSize: 13,
                fontWeight: 600,
                textAlign: "left",
                color: "rgba(0,0,0,0.68)",
                }}
            >
                공간에 어울리는 소품을 찾고 싶어요!
            </p>

            <p
                style={{
                position: "absolute",
                left: 69,
                top: 530,
                fontSize: 20,
                fontWeight: 600,
                textAlign: "left",
                color: "#000",
                }}
            >
                소품 솔루션
            </p>

            <div
                style={{
                width: 50,
                height: 50,
                position: "absolute",
                left: 292,
                top: 527,
                background: "#d9d9d9",
            }}>
                <img src="src/assets/bear.jpg" alt="bear" width="50" height="50"/>
            </div>

            <button
                style={{
                cursor: "pointer",
                width: 312,
                height: 100,
                position: "absolute",
                left: 48,
                top: 613,
                borderRadius: 12,
                background: "#fff",
                borderWidth: 1,
                borderColor: "#ddd9d9",
                }}>

            </button>

            <p
                style={{
                position: "absolute",
                left: 69,
                top: 622,
                fontSize: 13,
                fontWeight: 600,
                textAlign: "left",
                color: "rgba(0,0,0,0.68)",
                }}
            >
                이제 입주해서 다 해주세요
            </p>

            <p
                style={{
                position: "absolute",
                left: 70,
                top: 640,
                fontSize: 20,
                fontWeight: 600,
                textAlign: "left",
                color: "#000",
                }}
            >
                풀 스타일링
            </p>      
            <div
                style={{
                width: 50,
                height: 50,
                position: "absolute",
                left: 292,
                top: 636,
                background: "#d9d9d9",
            }}>
                <img src="src/assets/bear.jpg" alt="bear" width="50" height="50"/>
            </div> 
        

        </div>
        

    );
    
}