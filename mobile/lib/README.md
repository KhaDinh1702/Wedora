# Wedora Mobile App

Cấu trúc thư mục ứng dụng Flutter của Wedora được xây dựng theo mô hình Clean Architecture thu gọn:

```text
lib/
├── core/               # Chứa các cấu hình dùng chung toàn ứng dụng (constants, themes, network clients, utilities)
│   ├── constants/
│   ├── network/
│   ├── theme/
│   └── utils/
├── data/               # Tầng dữ liệu: API clients, local storage, repositories implementation, models
│   ├── datasources/
│   ├── models/
│   └── repositories/
├── domain/             # Tầng logic nghiệp vụ: Repositories interface, entities, usecases
│   ├── entities/
│   ├── repositories/
│   └── usecases/
├── presentation/       # Tầng giao diện: UI screens, widgets, controllers/blocs/providers
│   ├── controllers/    # Quản lý state (Bloc, Provider, hoặc Riverpod)
│   ├── screens/        # Các màn hình chính
│   └── widgets/        # Các reusable widgets dùng chung cho giao diện
└── main.dart           # File khởi chạy ứng dụng
```

## Các lệnh cơ bản
- Chạy ứng dụng: `flutter run`
- Tải dependencies: `flutter pub get`
- Phân tích code tĩnh: `flutter analyze`
